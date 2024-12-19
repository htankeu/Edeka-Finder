class International {
  formatCurrency(price: number): string {
    const value: string = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price);

    return value;
  }
}

export default new International();

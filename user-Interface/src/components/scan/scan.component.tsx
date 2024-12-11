import { Scanner } from "@yudiel/react-qr-scanner";

const Scan: React.FC = () => {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 flex items-center justify-center">
        <Scanner
          formats={["aztec", "code_128", "code_39","codabar","code_93","databar"]}
          onScan={(Result) => console.log("The scan-results", Result)}
          allowMultiple={true}
          scanDelay={3000}
          onError={() => {
            console.error("Error shown");
          }}
        />
      </div>
    </>
  );
};

export default Scan;

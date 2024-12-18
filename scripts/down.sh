echo "============================================================================="

PORT=3000 # Replace with the port you want to check

echo "Checking if the server's port $PORT is occupied..."

PID=$(netstat -anp | find ":$PORT")

echo "------------------ $PID-----------"

if [ -n "$PID" ]; then
    echo "Port $PORT is in use by process $PID. Stopping it..."
    kill -9 $PID
    echo "Process $PID has been stopped. Port $PORT is now free."
else
    echo "Port $PORT is not in use."
fi

prozess="$(docker ps -aq)"
echo $prozess

if [ -n "$prozess" ]; then
    echo "Begin to remove the containers"
    docker stop $(docker ps -aq)
    docker rm $(docker ps -aq)
    rm -r ../docker-volumes
    echo "All Containers removed successfully!!"
    echo "############################################################################"
else
    echo "We have not containers to remove"
fi

echo "That is the end"
echo "============================================================================="

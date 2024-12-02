echo "============================================================================="
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

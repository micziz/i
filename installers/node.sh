if [ -z $1 ]; then
    curl -sfLS https://install-node.vercel.app | bash -s
else
    curl -sfLS https://install-node.vercel.app/$1 | bash -s
fi

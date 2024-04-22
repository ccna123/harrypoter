#!bin/bash

#install pm2
npm install -g pm2 -y

#go to app working directory
chmod 700 -R harrypoter/
cd /home/ec2-user/harrypoter

#add npm and node to path so that we can execute npm from working directory
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

npm install
pm2 start index.js

#!/bin/bash
. ~/.nvm/nvm.sh
. ~/.bash_profile

command -v brew >/dev/null 2>&1 || { echo >&2 "Installing Homebrew Now"; \
echo  "https://brew.sh/index_de"; }

command -v nvm >/dev/null 2>&1 || { echo >&2 "Installing nvm Now"; \
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh)"; }

command -v nvm >/dev/null 2>&1 || {
	eval brew uninstall node
	echo "Add to your bash_profile "
	echo "vi ~/.bash_profile"

	echo "[ -s \"$NVM_DIR/bash_completion\" ] && \. \"$NVM_DIR/bash_completion\"  # This loads nvm bash_completion" >> ~/.bash_profile
	echo "export NVM_DIR=~/.nvm" >> ~/.bash_profile
	echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.bash_profile
 }

if [ "$1" == "-h" ]; then
  echo "Usage: `basename $0` ls // for list all installed node Versions"
  echo "Usage: `basename $0` ls-remote // you can see the full list of available versions by running"
  echo "Usage: `basename $0` install 8.9.4 // nvm will install Node.js version 8.9.4"
  echo "Usage: `basename $0` uninstall 8.9.4 // nvm will uninstall Node.js version 8.9.4"
  echo "Usage: nvm use 8.9.4 // nvm will use Node.js version 8.9.4"
  exit 0
fi

if [ "$1" == "ls" ]; then
  nvm ls
fi

if [ "$1" == "install" ]; then
  echo "nvm $1 $2"
  nvm $1 $2
fi

if [ "$1" == "uninstall" ]; then
  echo "nvm $1 $2"
  nvm $1 $2
fi

if [ "$1" == "use" ]; then
  echo "nvm $1 $2"
  nvm $1 $2
fi

if [ "$1" == "ls-remote" ]; then
  nvm $1
fi


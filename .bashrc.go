export GOPATH=$HOME/Development/go
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin
export GOBIN=$GOPATH/bin

# Create the necessary paths if they do not exist
mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin

# $GOPATH/src : Where your Go projects / programs are located
# $GOPATH/pkg : contains every package objects
# $GOPATH/bin : The compiled binaries home


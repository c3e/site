#!/bin/sh




/var/www/chaospott.de/engine/update.sh /var/www/chaospott.de/ /var/www/chaospott.de/ 

# hack to fix ownershit
chgrp -R foobar /var/www/chaospott.de/*
chmod -R g+rw /var/www/chaospott.de/*

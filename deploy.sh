#!/bin/bash
pm2 delete site
pm2 delete python_api
pm2 delete api

cd /var/app/number_identifier
source venv/bin/activate
pm2 start app.py --name python_api

cd /var/app/personal_site
pm2 start api/src/start.js --name api
pm2 start src/start.js --name site

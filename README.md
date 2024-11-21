# Movvies

## Installing

### Initializing Database Server

#### BACKEND (Installing)

```bash
# Start mysql service (xampp)

mysqldump -u root moviereco < c:\path\to\moviereco-sql-file     # load the dataset
```

```bash
# Install requirements

cd c:\path\to\moviereco                         # cd to project folder

python -m pip install -r requirements.txt       # install requirements
```

#### FRONTEND (Installing)

```bash
cd c:\path\to\moviereco-frontend

npm install     # install dependencies (run once)
```

### Starting the backend

```bash
# [1] Start mysql service (xampp)

cd c:\path\to\moviereco     # cd to project folder

flask run                   # run the project on 5000
```

### Starting the frontend

```bash
cd c:\path\to\moviereco-frontend

npm run dev     # run the project on 5173
```

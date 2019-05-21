# Example Application for Sap Cloud Foundry NodeJs Application with MongoDb

## Getting Started with Cloud Foundry on SAP Cloud Platform

In this Example, you will view more about Cloud Foundry. In particular, you will get familiar with:
 - the official CF CLI (cf-*.sh files)
 - Install nvm for multi nodeJs Versions (node.sh)
 - Login on Sap Cloud Foundry (cf-login.sh)
 - Push App to Sap Cloud Foundry (cf-push.sh)
 - Add Mongodb to Sap Cloud Foundry Application (cf-add-mongoDb.sh)

### Step 1

setup [Config File](/cf.conf) for Sap Cloud Foundry Deployment

* USER = SAP User 
* PASS = SAp USer Password
* ORG = Sap cloud Foundry Subaccount Organization
* API = Sap cloud Foundry Subaccount API Endpoint
* SPACE = Sap cloud Foundry Subaccount selected Space

### Step 2
Install dependencies
```bash
yarn install
```

### Step 3

create MongoDb Service and add to manifest

```bash
bash cf-add-mongoDb.sh
```

### Step 4

Deploy Application to Sap Cloud Foundry

```bash
bash cf-push.sh
```

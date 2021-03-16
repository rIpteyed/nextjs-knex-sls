This is a [Next.js](https://nextjs.org/) POC project.

# Stack
- Next.js (including Tailwind CSS for UI styling and React Components)
- Knex.js - ORM
- Serverless Framework (Actually I cheated and used the @sls-next/serverless-component to accelerate this project) on AWS

To run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##To deploy to AWS:

1. you'll need to setup your AWS configuration:
```
sls config credentials --provider aws --key [key] --secret [secret]
``` 

2. Add a serverless.yml file to the root of the project.  Here is the one we're using for this project:
```
nextjs-blog-sls:
  component: "@sls-next/serverless-component@1.19.0-alpha.37"
  inputs:
    bucketName: [bucketname]
    build:
      env:
        HOST: [RDS Hostname]
        USER: [postgres user]
        PASSWORD: [postress password]
        DATABASE: [database name]
```

3. You'll need to add an RDS PostgreSQL instance and update the DB credentials in the SLS environment variables as above.

#API
You will find 2 endpoints:

`/api/devices` - GET/POST/PUT/DELETE
`/api/projects` - GET

#Migrations and Seeds
You can find the Knex migrations and seed data in the /knex/knex/migrations and /knex/knex/seeds directories.

#Demo
You can also test out my existing demo deployment at: [https://d3m251smcpa2je.cloudfront.net/](https://d3m251smcpa2je.cloudfront.net/)

Which also means you can GET raw devices here: https://d3m251smcpa2je.cloudfront.net/api/devices
and raw projects here: https://d3m251smcpa2je.cloudfront.net/api/projects

Just in case you want to test the existing deployment API CRUD you can test it with Insomnia, here are the cURLs:

```
GET
curl --request GET \
  --url https://d3m251smcpa2je.cloudfront.net/api/devices \
  --header 'Content-Type: application/json'
```

```
INSERT
curl --request POST \
  --url https://d3m251smcpa2je.cloudfront.net/api/devices \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 7,
	"token": "zyx321",
	"user_id": 3,
	"project_id": 4
}'
```

```
UPDATE
curl --request PUT \
  --url https://d3m251smcpa2je.cloudfront.net/api/devices \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 1,
	"token": "zyx321TEST"
}'
```

```
DELETE
curl --request DELETE \
  --url https://d3m251smcpa2je.cloudfront.net/api/devices \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 7
}'
```

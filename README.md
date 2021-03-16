##This is a [Next.js](https://nextjs.org/) Learning project to help me get familiar with nextjs, knex.js and refresh my SLS skills.

# Stack
- Next.js (including Tailwind CSS for UI styling and React Components)
- Knex.js - ORM
- Serverless Framework (Actually I cheated and used the @sls-next/serverless-component to accelerate this project) on AWS
- RDS PostgreSQL

#To deploy to AWS:

0. Clone the repository.
1. Setup your AWS configuration:
```
sls config credentials --provider aws --key [key] --secret [secret]
``` 

2. Add a serverless.yml file to the root of the project.  Here is the one I'm using for this project:
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

3. Add an RDS PostgreSQL instance and update the DB credentials in the SLS environment variables as above.
4. Run the Migrations and then the Seeds from inside the knex directory using:
`npm run migrate`
`npm run seed`
5. Now you should have data and you can run the app locally using `npm run dev` or deploy to AWS by running `npm run deploy` or just `sls` in the root.

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

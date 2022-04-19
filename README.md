# [AD CAMPPAIGNS](http://localhost:3000/)

## Setup App

**1. Prequisites**

1. Git is installed
2. Node version >12
3. NPM version >6
4. Internet connectivity

**2. Clone the repo**

```shell
$ git clone https://github.com/Sabohi/fe-ad-campaigns.git 
```

**3. Install the packages**

```shell
$ cd ad-campaigns
$ yarn install
```

**4. Setup .env file**

**5. You're ready to rock**

## Start App

```shell
$ yarn start
```

## Building & Deploying the App

```shell
# production build
$ yarn build:prod

# development build
$ yarn build

#DEV Server
$ yarn deploy

#PROD Server
$ yarn deploy:prod
```

## Testing APP

```shell
$ yarn test
```

## Formatting Code

```shell
$ yarn format
```

**To Install packages run following command**

```shell
$ yarn global add parcel-bundler
$ yarn add jsdoc better-docs
```

**To generate docs**

```shell
$ yarn docs
```

**To run test by user**

```window
1. Call globally exposed method AddCampaigns, and please provide data in array form.
Sample data: 
[
    {
        "id": 11,
        "name": "Divya",
        "startDate": "1/19/2022",
        "endDate": "4/30/2022",
        "Budget": 88376,
        "userId": 3
    },
    {
        "id": 12,
        "name": "Jaipreet",
        "startDate": "11/21/2017",
        "endDate": "2/21/2018",
        "Budget": 508715,
        "userId": 6
    },
    {
        "id": 15,
        "name": "Miso",
        "startDate": "11/1/2017",
        "endDate": "6/20/2017",
        "Budget": 139507,
        "userId": 7
    },
    {
        "id": 16,
        "name": "Trilith",
        "startDate": "8/25/2017",
        "endDate": "11/30/2017",
        "Budget": 199838,
        "userId": 7
    },
    {
        "id": 17,
        "name": "Lara",
        "startDate": "11/28/2017",
        "endDate": "3/10/2018",
        "Budget": 439850,
        "userId": 6
    },
    {
        "id": 18,
        "name": "Prabhojit",
        "startDate": "7/2/2017",
        "endDate": "6/23/2017",
        "Budget": 258131,
        "userId": 2
    },
    {
        "id": 19,
        "name": "Blogtag",
        "startDate": "6/27/2017",
        "endDate": "1/15/2018",
        "Budget": 509578,
        "userId": 3
    },
    {
        "id": 20,
        "name": "Riyaz",
        "startDate": "10/13/2017",
        "endDate": "1/25/2018",
        "Budget": 279852,
        "userId": 5
    },
    {
        "id": 21,
        "name": "Zubi",
        "startDate": "9/6/2017",
        "endDate": "11/10/2017",
        "Budget": 309819,
        "userId": 7
    },
    {
        "id": 22,
        "name": "Rahul",
        "startDate": "3/5/2018",
        "endDate": "10/2/2017",
        "Budget": 505402,
        "userId": 7
    }
]

2. If data set is provided with same id, that dataset is updated by later one.
```

**Assumptions**

```window
1. If data set is provided with same id, that dataset is updated by later one.
2. If end date is greater than start date, that data will not be shown in Table.
3. If either start date or end date is empty, that data will be shown in Table.
4. Campaign is active (a campaign is running when the current date is inside the start-end date range).
5. User name (can be Unknown user, if the user's data is missing for specified userId).
6. No campaigns are shown by default, those which are provided through JS console will be shown.
```

# ad-campaigns

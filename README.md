# [AD CAMPPAIGNS](http://localhost:3000/)

## Setup App

**1. Prequisites**

1. Git is installed
2. Node version >12
3. NPM version >6
4. Internet connectivity

**2. Clone the repo**

```shell
$ git clone https://github.com/Sabohi/ad-campaigns
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
1. Call globally exposed method provideData, and provide data in array form.
2. If data set is provided with same id, that dataset is updated by later one.
```

**Assumptions**

```window
1. If data set is provided with same id, that dataset is updated by later one.
2. If end date is greater than start date, that data will not be shown in Table.
3. If either start date or end date is empty, that data will be shown in Table.
4. Campaign is active (a campaign is running when the current date is inside the start-end date range).
5. User name (can be Unknown user, if the user's data is missing for specified userId).
```

# ad-campaigns

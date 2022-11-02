## About

[gdsc-usls-id](https://github.com/gdsc-usls/gdsc-usls-id) is an open-source project of [Google Developer Student Clubs - USLS](https://www.facebook.com/dsc.usls) that generates an ID badge for the official club members with their corresponding position.

### Preview

<div>

<img src="https://user-images.githubusercontent.com/69457996/199033737-92f0f5da-6f9a-4223-9d1b-a930dc247ab8.png" width="250" />
&nbsp;
<img src="https://user-images.githubusercontent.com/69457996/199033752-a95535ec-d433-4b81-9d92-4fa1f1e3ed82.png" width="250" />

</div>

### Tech Stack
- Next.js
- Firebase
- TypeScript
- Tailwind CSS

## Contributing

If you like this project, consider giving it a star! Want to contribute? See [CODE_OF_CONDUCT.md](https://github.com/gdsc-usls/gdsc-usls-id/blob/main/CODE_OF_CONDUCT.md)

1. Fork this [repository](https://github.com/gdsc-usls/gdsc-usls-id) and clone your fork.
2. Create a new branch for your changes:

```sh
$ cd your_cloned_fork
$ git checkout dev
$ git checkout -b my-new-branch
```

3. Create a [Firebase](https://firebase.google.com/) project & add a `Web` app.

4. Create a `.env.local` file with this content:

> Replace `VALUE` with your Firebase config.

```sh
NEXT_PUBLIC_API_KEY=VALUE
NEXT_PUBLIC_AUTH_DOMAIN=VALUE
NEXT_PUBLIC_PROJECT_ID=VALUE
NEXT_PUBLIC_STORAGE_BUCKET=VALUE
NEXT_PUBLIC_MESSAGING_SENDER_ID=VALUE
NEXT_PUBLIC_APP_ID=VALUE
NEXT_PUBLIC_MEASUREMENT_ID=VALUE

NEXT_PUBLIC_PASSWORD=123456
```

5. To run locally:

```sh
# Only use yarn as your package manager

$ yarn # install dependencies
$ yarn dev # start local server
```

6. Visit `/manage` to add data & use `NEXT_PUBLIC_PASSWORD` to authenticate.

7. Commit your changes and push your branch:

```sh
$ git add .
$ git commit -m "chore: some changes"
$ git push origin HEAD
```

8. Submit a pull request on the `dev` branch. (resolve conflicts if present)

## License

Licensed under the [MIT license](https://github.com/gdsc-usls/gdsc-usls-id/blob/main/LICENSE).

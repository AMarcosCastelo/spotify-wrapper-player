# Spotify Wrapper Player

A player using the spotify-wrapper lib.

## Browser Support

This application relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Getting Started

## Installation

```sh
$ npm install
```

This application depends on a token for its operation. Go to [Spotify Console Search](https://developer.spotify.com/console/get-search-item/) and get the OAuph Token with your spotify authentication.

[Spotify Console Search]('https://miro.medium.com/max/4956/1*Xy-g_lsYkJEYsXIP34K8eQ.png')

### ES6

```js
import SpotifyWrapper from 'ma-spotify-wrapper/lib/index';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

export default spotify;
```
## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Antonio Marcos](https://avatars0.githubusercontent.com/u/43973049?s=460&v=4)|
|:---------------------:|
|  [Antonio Marcos](https://github.com/AMarcosCastelo)   |

See also the list of [contributors](https://github.com/AMarcosCastelo/spotify-wrapper/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

import UriInterface from '@chubbyjs/psr-http-message/dist/UriInterface';

interface UriFactoryInterface {
    createUri(uri: string): UriInterface;
}

export default UriFactoryInterface;

import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';
import UriInterface from '@chubbyjs/psr-http-message/dist/UriInterface';

interface ServerRequestFactoryInterface {
    createServerRequest(method: string, uri: string | UriInterface): ServerRequestInterface;
}

export default ServerRequestFactoryInterface;

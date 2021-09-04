import { Method } from '@chubbyjs/psr-http-message/dist/RequestInterface';
import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';
import UriInterface from '@chubbyjs/psr-http-message/dist/UriInterface';

interface ServerRequestFactoryInterface {
    createServerRequest(method: Method, uri: string | UriInterface): ServerRequestInterface;
}

export default ServerRequestFactoryInterface;

import RequestInterface, { Method } from '@chubbyjs/psr-http-message/dist/RequestInterface';
import UriInterface from '@chubbyjs/psr-http-message/dist/UriInterface';

interface RequestFactoryInterface {
    createRequest(method: Method, uri: string | UriInterface): RequestInterface;
}

export default RequestFactoryInterface;

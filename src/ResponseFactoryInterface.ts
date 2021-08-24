import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';

interface ResponseFactoryInterface {
    createResponse(code: number, reasonPhrase: string): ResponseInterface;
}

export default ResponseFactoryInterface;

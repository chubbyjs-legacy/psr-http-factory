import { Duplex } from 'stream';
import * as Stream from 'stream';

interface StreamFactoryInterface {
    createStream(content: string): Duplex;
    createStreamFromFile(filename: string): Duplex;
    createStreamFromResource(stream: Stream): Duplex;
}

export default StreamFactoryInterface;

import * as pureImage from 'pureimage';

const canvas = pureImage.make(128, 128);

pureImage.encodePNGToStream(canvas, process.stdout)

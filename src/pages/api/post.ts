import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import randomstring from 'randomstring';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_DB_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_DB_SECRET,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
  });

  const docClient = new AWS.DynamoDB.DocumentClient();

  if (req.method === 'POST') {
    const params = {
      TableName: 'post',
      Item: {
        post_id: randomstring.generate(20),
        content: req.body.content,
        title: req.body.title,
      },
    };

    docClient.put(params, err => {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error :(',
        });
      } else {
        res.send({
          success: true,
          message: 'Added Post :)',
        });
      }
    });
  }
}

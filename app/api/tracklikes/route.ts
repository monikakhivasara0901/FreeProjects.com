// pages/api/projects/[id]/interaction.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/dbConfig/dbConfig';
import Project from '../../../models/Project';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'PUT':
      try {
        const project = await Project.findById(id);

        if (!project) {
          return res.status(404).json({ error: 'Project not found' });
        }

        if (req.body.interactionType === 'like') {
          project.likes++;
        } else if (req.body.interactionType === 'view') {
          project.views++;
        }

        await project.save();
        res.status(200).json({ likes: project.likes, views: project.views });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
}



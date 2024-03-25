import { NextApiRequest, NextApiResponse } from 'next';
import Project from '../../models/ProjectInfoSchema'; // Assuming you have a Mongoose model for projects

interface Filters {
  stackUsed?: string[];
  universityOrCollegeName?: string;
  status?: string;
  // Add other filter properties as needed
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const filters: Filters = req.body;

    try {
      // Construct the MongoDB query based on the provided filters
      const query: any = {}; // Define query as any type for now

      if (filters.stackUsed && filters.stackUsed.length > 0) {
        query.stackUsed = { $in: filters.stackUsed };
      }

      if (filters.universityOrCollegeName) {
        query.universityOrCollegeName = filters.universityOrCollegeName;
      }

      if (filters.status) {
        query.status = filters.status;
      }

      // Query the database to find projects that match the specified filters
      const projects = await Project.find(query);

      // Return the search results
      res.status(200).json({ projects });
    } catch (error) {
      console.error('Error searching projects:', error);
      res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

'use client';


import { project } from '@/actions/create'; 
import Form from 'next/form';

export default function CreateProjectForm() {
  

  return (
    <Form
       action={project}
   
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Create Project</h2>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          required
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* GitHub Frontend */}
      <div>
        <label htmlFor="gitFrontend" className="block text-sm font-medium mb-1">
          GitHub Frontend URL
        </label>
        <input
          type="url"
          name="gitFrontend"
          id="gitFrontend"
          required
          placeholder="https://github.com/..."
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* GitHub Backend */}
      <div>
        <label htmlFor="gitBackend" className="block text-sm font-medium mb-1">
          GitHub Backend URL
        </label>
        <input
          type="url"
          name="gitBackend"
          id="gitBackend"
          required
          placeholder="https://github.com/..."
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Live URL */}
      <div>
        <label htmlFor="liveUrl" className="block text-sm font-medium mb-1">
          Live Site URL
        </label>
        <input
          type="url"
          name="liveUrl"
          id="liveUrl"
          required
          placeholder="https://..."
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Thumbnail URL */}
      <div>
        <label htmlFor="thumbnail" className="block text-sm font-medium mb-1">
          Thumbnail URL
        </label>
        <input
          type="url"
          name="thumbnail"
          id="thumbnail"
          required
          placeholder="https://..."
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Features */}
      <div>
        <label htmlFor="features" className="block text-sm font-medium mb-1">
          Features (comma-separated)
        </label>
        <textarea
          name="features"
          id="features"
          rows={3}
          required
          placeholder="e.g. Real-time tracking, Goal setting, Dashboard"
          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Project
      </button>
    </Form>
  );
}

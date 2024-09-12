const { expect } = require('chai');
const { createPost, getPostById, updatePost, deletePost, getPosts } = require('../../utils/apiClient');

describe('CRUD Operations on Posts', () => {
  
  let createdPostId;

  it('should create a new post (POST /posts)', async () => {

    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await createPost(newPost);

    expect(response.status).to.equal(201);
    expect(response.data).to.include(newPost);

    // Save the created post ID for later tests
    createdPostId = response.data.id;
  });
    
  // Create a new post
  it('should create a new post (POST /posts)', async () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await createPost(newPost);

    expect(response.status).to.equal(201);
    expect(response.data).to.include(newPost);

    // Save the created post ID for later tests
    createdPostId = response.data.id;
  });

  // Get all posts
  it('should fetch all posts (GET /posts)', async () => {
    const response = await getPosts();
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });

  // Delete a post
  it('should delete a post (DELETE /posts/:id)', async () => {
    const response = await deletePost(createdPostId);

    expect(response.status).to.equal(200);

    // Verify the post is deleted by trying to fetch it again
    try {
      await getPostById(createdPostId);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }

    it('should create a new post (POST /posts)', async () => {
      const newPost = { title: 'foo', body: 'bar', userId: 1 };
      const response = await createPost(newPost);
  
      expect(response.status).to.equal(201);
      expect(response.data).to.include(newPost);
  
      // Save the created post ID for later tests
      createdPostId = response.data.id;
    });
   
      it('should delete a post (DELETE /posts/:id)', async () => {
        const response = await deletePost(createdPostId);
    
        expect(response.status).to.equal(200);
    
        // Verify the post is deleted by trying to fetch it again
        try {
          await getPostById(createdPostId);
        } catch (error) {
          expect(error.response.status).to.equal(404);
        }
      });
  });

});     

describe('CRUD Operations on Posts (Negative Tests)', () => {
  
  let invalidPostId = 999999; // Assume this ID doesn't exist
  
  // 1. Negative Test: Attempt to create a post with missing fields
  it('should fail to create a post with missing fields (POST /posts)', async () => {
    const incompletePost = { title: '' };  // Missing 'body' and 'userId'

    try {
      const response = await createPost(incompletePost);
    } catch (error) {
      expect(error.response.status).to.equal(400);  // Expect a 400 Bad Request
      console.error('Create Post Error:', error.response.data);
    }
  });

  // 2. Negative Test: Attempt to fetch a non-existent post
  it('should return 404 for non-existent post (GET /posts/:id)', async () => {
    try {
      const response = await getPostById(invalidPostId);
    } catch (error) {
      expect(error.response.status).to.equal(404);  // Expect a 404 Not Found
      console.error('Get Post Error:', error.response.data);
    }
  });

  // 3. Negative Test: Attempt to update a post with invalid data
  it('should fail to update a post with invalid data (PUT /posts/:id)', async () => {
    const invalidUpdate = { title: '', body: '', userId: 'abc' };  // Invalid userId and empty fields

    try {
      const response = await updatePost(invalidPostId, invalidUpdate);
    } catch (error) {
      expect(error.response.status).to.equal(500);  // Expect a 400 Bad Request
      console.error('Update Post Error:', error.response.data);
    }
  });

  // 4. Negative Test: Attempt to delete a non-existent post
  it('should return 404 for non-existent post when trying to delete (DELETE /posts/:id)', async () => {
    try {
      const response = await deletePost(invalidPostId);
    } catch (error) {
      expect(error.response.status).to.equal(404);  // Expect a 404 Not Found
      console.error('Delete Post Error:', error.response.data);
    }
  });

});
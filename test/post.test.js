/* eslint-disable */
const mockingoose = require('mockingoose');

const Post = require('../models/Post');


jest.setTimeout(60000)

describe('Test mongoose Post model', () => {
  it('should return doc with findById', () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'title',
      thumb: 'thumb',
      username: 'username',
      desc : 'desc',
      content: 'content',
      categories: ['categories']
    } 
    mockingoose(Post).toReturn(_doc, 'findOne');

    return Post.findById({_id: '507f191e810c19729de860ea'}).then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
    })
  })

  it('should return doc with find', () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'title',
      thumb: 'thumb',
      username: 'username',
      desc : 'desc',
      content: 'content',
      categories: ['categories']
    } 
    mockingoose(Post).toReturn(_doc, 'find');

    return Post.find().then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
    })
  })

  it('should delete post', () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'title',
      thumb: 'thumb',
      username: 'username',
      desc : 'desc',
      content: 'content',
      categories: ['categories']
    }

    mockingoose(Post).toReturn(_doc, 'deleteOne');

    return Post.deleteOne({_id: '507f191e810c19729de860ea'}).then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
    })
  })

  it('should update post', () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'title',
      thumb: 'thumb',
      username: 'username',
      desc : 'desc',
      content: 'content',
      categories: ['categories']
    }

    mockingoose(Post).toReturn(_doc, 'findOneAndUpdate')

    return Post.findOneAndUpdate({_id: '507f191e810c19729de860ea'}).then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    })
  })

})



import { Dispatch } from 'redux'
import {
  LOAD_NEWSFEED_SUCCESS,
  PostsAction,
  Post,
  LOAD_POSTS_FAIL,
  LOAD_POSTS_PROGRESS,
  UPDATE_POSTS_PROGRESS,
  UPDATE_NEWSFEED_SUCCESS,
  UPDATE_POSTS_FAILED,
  UPDATE_GROUPPOSTS_SUCCESS,
  LOAD_GROUPPOSTS_SUCCESS,
  ImageFormData,
  Poll,
  POST_POST_PROGRESS,
  POST_POST_SUCCESS,
  POST_POST_FAILED,
} from '../types/post.types'
import {
  postService,
  tickService,
  newsfeedService,
  reactionService,
} from '../../services'
import store from '../store'
import { User } from '../types'

export const getNewsFeed = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: LOAD_POSTS_PROGRESS })
    const posts = await newsfeedService.getAll()
    if (posts) {
      dispatch({ type: LOAD_NEWSFEED_SUCCESS, newsfeed: posts })
    } else {
      dispatch({ type: LOAD_POSTS_FAIL })
    }
  }
}

export const getGroupPosts = (groupId: number) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: LOAD_POSTS_PROGRESS })
    const posts = await postService.getAllwParams('group', groupId)
    if (posts) {
      dispatch({ type: LOAD_GROUPPOSTS_SUCCESS, groupPosts: posts })
    } else {
      dispatch({ type: LOAD_POSTS_FAIL })
    }
  }
}

export const addPost = (
  postData: Pick<Post, 'content' | 'assignedGroup' | 'type'>,
  images: ImageFormData[],
  polls: string[],
) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: POST_POST_PROGRESS })
    const newPost = await postService.addPost(postData, images, polls)
    if (newPost) {
      dispatch({ type: POST_POST_SUCCESS })
      dispatch({ type: UPDATE_POSTS_PROGRESS })
      const currentPosts: Post[] = JSON.parse(
        JSON.stringify(
          postData.assignedGroup.id === 1
            ? store.getState().post.currentNewsfeed
            : store.getState().post.groupPosts,
        ),
      )
      currentPosts.unshift(newPost)
      postData.assignedGroup.id === 1
        ? dispatch({ type: UPDATE_NEWSFEED_SUCCESS, newsfeed: currentPosts })
        : dispatch({
            type: UPDATE_GROUPPOSTS_SUCCESS,
            groupPosts: currentPosts,
          })
    } else {
      dispatch({ type: POST_POST_FAILED })
    }
  }
}

export const addReaction = (postId: number, groupId: number) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: UPDATE_POSTS_PROGRESS })
    const reactionId = await reactionService.addReaction(postId)
    const currentPosts: Post[] = JSON.parse(
      JSON.stringify(
        groupId === 1
          ? store.getState().post.currentNewsfeed
          : store.getState().post.groupPosts,
      ),
    )
    const currentUser: User = JSON.parse(
      JSON.stringify(store.getState().signin.currentUser),
    )
    if (reactionId) {
      currentPosts.forEach((post) => {
        if (post.id === postId) {
          post.reactionNumber! += 1
          post.reactions.push({
            id: reactionId,
            type: 0,
            assignedUser: {
              id: currentUser.id,
              avatar: currentUser.avatar,
              displayName: currentUser.displayName,
            },
          })
        }
      })
      groupId === 1
        ? dispatch({ type: UPDATE_NEWSFEED_SUCCESS, newsfeed: currentPosts })
        : dispatch({
            type: UPDATE_GROUPPOSTS_SUCCESS,
            groupPosts: currentPosts,
          })
    } else {
      dispatch({ type: UPDATE_POSTS_FAILED })
    }
  }
}

export const deleteReaction = (
  reactionId: number,
  postId: number,
  groupId: number,
) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: UPDATE_POSTS_PROGRESS })
    const response = await reactionService.delete(reactionId)
    const currentPosts: Post[] = JSON.parse(
      JSON.stringify(
        groupId === 1
          ? store.getState().post.currentNewsfeed
          : store.getState().post.groupPosts,
      ),
    )
    if (response === 'success') {
      currentPosts.forEach((post) => {
        if (post.id === postId) {
          post.reactionNumber! -= 1
          post.reactions = post.reactions.filter((reaction) => {
            return reaction.id !== reactionId
          })
        }
      })
      groupId === 1
        ? dispatch({ type: UPDATE_NEWSFEED_SUCCESS, newsfeed: currentPosts })
        : dispatch({
            type: UPDATE_GROUPPOSTS_SUCCESS,
            groupPosts: currentPosts,
          })
    } else {
      dispatch({ type: UPDATE_POSTS_FAILED })
    }
  }
}

export const addTick = (pollId: number, postId: number, groupId: number) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: UPDATE_POSTS_PROGRESS })
    const data = await tickService.addTick(pollId)
    const currentPosts: Post[] = JSON.parse(
      JSON.stringify(
        groupId === 1
          ? store.getState().post.currentNewsfeed
          : store.getState().post.groupPosts,
      ),
    )
    const currentUser: User = JSON.parse(
      JSON.stringify(store.getState().signin.currentUser),
    )
    if (data) {
      currentPosts.forEach((post) => {
        if (post.id === postId) {
          return post.polls.forEach((poll) => {
            if (poll.id === pollId) {
              return poll.ticks.push({
                id: data.id,
                assignedUser: {
                  avatar: currentUser.avatar,
                  displayName: currentUser.displayName,
                  id: currentUser.id,
                },
              })
            }
          })
        }
      })
      groupId === 1
        ? dispatch({ type: UPDATE_NEWSFEED_SUCCESS, newsfeed: currentPosts })
        : dispatch({
            type: UPDATE_GROUPPOSTS_SUCCESS,
            groupPosts: currentPosts,
          })
    } else {
      dispatch({ type: UPDATE_POSTS_FAILED })
    }
  }
}

export const deleteTick = (
  pollId: number,
  tickId: number,
  postId: number,
  groupId: number,
) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: UPDATE_POSTS_PROGRESS })
    const response = await tickService.delete(tickId)
    const currentPosts: Post[] = JSON.parse(
      JSON.stringify(
        groupId === 1
          ? store.getState().post.currentNewsfeed
          : store.getState().post.groupPosts,
      ),
    )
    if (response === 'success') {
      currentPosts.forEach((post) => {
        if (post.id === postId) {
          post.polls.forEach((poll) => {
            if (poll.id === pollId) {
              poll.ticks = poll.ticks.filter((tick) => {
                return tick.id !== tickId
              })
            }
          })
        }
      })
      groupId === 1
        ? dispatch({ type: UPDATE_NEWSFEED_SUCCESS, newsfeed: currentPosts })
        : dispatch({
            type: UPDATE_GROUPPOSTS_SUCCESS,
            groupPosts: currentPosts,
          })
    } else {
      dispatch({ type: UPDATE_POSTS_FAILED })
    }
  }
}

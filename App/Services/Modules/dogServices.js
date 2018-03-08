import apiObject from '../apiUtils'

export const getAllListBreed = async () => {
  const {api} = apiObject
  return api.get('breeds/list')
}

export const getRandomPic = async (param) => {
  const {api} = apiObject
  return api.get('breed/' + param + '/images/random')
}

const rtkBaseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

const apiMethods = {
  POST: 'POST',
  GET: 'GET',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const httpStatusCode = {
  '200_OK': 200, // toasts
  '201_Created': 201, // toasts
  '202_Accepted': 202, // toasts
  '204_NoContent': 204, // toasts
  '400_Bad_Request': 400, //page
  '401_Unauthorized': 401, //page // most likely to be thrown by the server when user is not logged in or token is expired, or user is not authorized to access the resource, or user is not authorized to perform the action, need to re-login, logout or re-authenticate the user after error is caught
  '403_Forbidden': 403, //page
  '404_Not_Found': 404, //page
  '500_Internal_Server_Error': 500, //page
  '502_Bad_Gateway': 502, //page
  '503_Service_Unavailable': 503, //page
  '504_Gateway_Timeout': 504, //page
  '404_Parse_Error': 'PARSING_ERROR', // page // most likely to be thrown by the server when can't parse the request or find endpoint itself
  FETCH_ERROR: 'FETCH_ERROR' // page // most likely to be thrown by the client when can't fetch the request
}

const contentTypes = {
  JSON: 'application/json',
  TEXT: 'text'
}

const apiRoute = {
  TEST_USER_ENDPOINT: {
    getAll: 'api/trpc/user.getAll'
  }
}

const mimeTypes = {
  // Image files mime types
  IMAGES_ALL: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif'] },
  IMAGES_JPG: { 'image/*': ['.jpg', '.jpeg'] },
  IMAGES_PNG: { 'image/*': ['.png'] },
  IMAGES_GIF: { 'image/*': ['.gif'] },

  // Video files mime types
  VIDEOS_ALL: { 'video/*': ['.mp4', '.mkv'] },
  VIDEOS_MP4: { 'video/*': ['.mp4'] },
  VIDEOS_MKV: { 'video/*': ['.mkv'] },

  // Excell files mime types
  EXCEL: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xls', '.xlsx'] },

  // PDF files
  PDF: { 'application/pdf': ['.pdf'] },

  // Doc Files
  DOCS: { 'application/msword': ['.doc', '.docx'] }
}

export { rtkBaseURL, apiRoute, apiMethods, contentTypes, httpStatusCode, mimeTypes }

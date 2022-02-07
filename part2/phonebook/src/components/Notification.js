const Notification = ({ message, status }) => {
    if (message === '') {
      return null
    }
  
    return (
      <div className={status ? 'sucess' : 'error'}>
        {message}
      </div>
    )
  }

export default Notification 
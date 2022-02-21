module.exports = async ( user_id, data ) => {
  const isDuplicate =  data.booking_with_quality_check.findIndex(function(item, i){
      return item.user_id === user_id });
  if(isDuplicate === -1 ) return false
  if(isDuplicate) return true
}




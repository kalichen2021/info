function init() {
  hash = "751134923"
  CodeInfo = "00390062002心003b004卿004卿46670037001心002文0033003000350031003500330034002文00360039002卿0062002心003b0039005卿006c003b00390062002心003b521356784667卿4文955卿b55575b3张564a0039002卿0062002心003b0039005卿006c003b00390062002心003b792c679b00370039002卿0062002心003b0039005卿006c003b00390062002心003b0065005c00660063005张0062005文0068005a002文002张002文002心003卿0069006心006张0066006900690065002c005张006900670039002卿0062002心003b0039005卿006c003b00390062002心003b002文0033003000350031003500330034002文0036003卿006b006b002c005张006900670039002卿0062002心003b"
}
$(document).ready(function () {
  init()
  $('#enter').click(function () {
    username = $('#name').val();
    if (username.hashCode() == hash) {
      alert('你好,'+username)
      var data = dec(CodeInfo,MakeKey('abc'+username))
      $('#check').css('display','none')
      $('#show').css('display','block')
      $('#show').html(data)
    }
  });
});
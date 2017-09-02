stop = 0

SC003::
If stop = 0
  {
   stop = 1
   return
  }
If stop = 1
  {
    stop = 0
    return
  }

SC002:: ;

Loop, 100000
{
    If stop = 1
      Break

    Click, 386, 510 Left, Down
    Click, 386, 510 Left, Up
    Send Хорошего дня
    Click, 885, 723 Left, Down
    Click, 885, 723 Left, Up
    Send, {LControl Down}
    Send, {SC02F Down}
    Send, {SC02F Up}
    Send, {LControl Up}
    Send, {Enter}
    Sleep, 3000
}

Return





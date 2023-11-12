interface button {
  text?: string;
  fontSize?: string;
  fontColor?: string;
  bg?: string;
  px?: string;
  py?: string;
  radius?: string;
  shadow?: string;
  width?: string;
}
function Button({
  text = 'Daftar Sekarang',
  fontSize = 'text-[14px]',
  fontColor = 'text-white',
  bg = 'bg-primary-01',
  px = 'px-[18px]',
  py = 'py-2.5',
  radius = 'rounded-[100px]',
  shadow = '',
  width = 'w-full'
}: button) {
  return (
    <div className={`${fontSize} ${width} ${fontColor} ${bg} ${px} ${py} ${radius} ${shadow} text-center cursor-pointer active:scale-95`}>
      {text}
    </div>
  )
}

export default Button
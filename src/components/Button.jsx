import BtnSvg from '../assets/svg/BtnSvg'

const Button = ({ className, href, onClick, children, px, white}) => {
  const classes = 'button relative inline-flex items-center justify-center h-11 transition-color border hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}}';
  
  const renderBtn = () => {
    return (
    <button classNAme={classes}>
      <span>{children}</span>
      {BtnSvg(white)}
    </button>
  )
}
}

export default Button;

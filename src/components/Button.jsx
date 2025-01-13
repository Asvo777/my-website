import BtnSvg from '../assets/svg/BtnSvg'

const Button = ({ className, href, onClick, children, px, white}) => {
  const classes = 'button relative inline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}}';
  
  const renderBtn = () => (
    <button className={classes}>
      <span>{children}</span>
      {BtnSvg(white)}
    </button>
  )

  return renderBtn();
}

export default Button;

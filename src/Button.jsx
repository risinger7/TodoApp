
export default function Button(props) {

    const { title, theme, onClick, color} = props
    
    const styles = {
        theme1: "text-wrap bg-slate-800 hover:bg-slate-700 h-12 w-100 text-white font-semibold px-6 rounded-lg flex items-center justify-center",
        theme2: "text-white ml-4 mr-4 rounded-md text-center pl-2 pr-2 w-24",
    }

    const classTheme = styles[theme]

    return (
        <button className={`${classTheme} ${color}`} onClick={onClick}>{title}</button>
    )
}
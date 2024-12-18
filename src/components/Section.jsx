export default function Section({title,children,...props}){
    return(
        <section {...props}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
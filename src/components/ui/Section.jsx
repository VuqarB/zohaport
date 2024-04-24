
const Section = ({ padding, className, children }) => {
    return (
        <section className={`relative ${padding || 'pt-[60px] xs:pt-[80px] md:pt-[100px] cLg:pt-[150px] cLg:pb-[120px]'} ${className}`}>
            {children}
        </section>
    )
}

export default Section
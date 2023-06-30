interface IFilterBar{
    type:string,
    setType(type:string):void
}

const FilterBar = ({type, setType}:IFilterBar) => {
    const coffeeTypes = ['Iced Coffee', 'Hot Coffee', 'Fruit Juice']

    const checkActive = (item:string) =>{
        return item===type ? 'active' : ''
    }
    
    return (
        <div className='filterBar'>
            <ul>
                {
                    coffeeTypes.map(item=>(
                        <li key={item} onClick={()=>setType(item)} className={checkActive(item)} >
                            {item}
                        </li>
                    ))
                }
            </ul>            
        </div>
    );
};

export default FilterBar;
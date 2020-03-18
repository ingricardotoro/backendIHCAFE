import Category from '../models/Category'

export async function categoriesbyid(req,res){
    const { id } = req.params;
    try {
       
        const  category =await  Category.findOne({
           
            where:{
                id:id
            }
        });
        res.json({
            category
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR La Categoria por Id:"+error);
    }
   
} 


export async function categoriesparents(req,res){
    
    try {
       
        const  categories =await  Category.findAll({
           
            where:{
                parent_category:0
            }
        });
        res.json({
            categories
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR La Categorias Padres:"+error);
    }
   
} 

//buscar las categorias hijas dado un id de categoria padre.
export async function categories_childs(req,res){
    const { id } = req.params;

    if (id != 0) {// no es categoria padre
        
        try {
       
            const clasificaciones =await  Category.findAll({
               
                where:{
                    parent_category:id
                }
            });
            res.json({
                clasificaciones
            })
          
        } catch (error) {
            console.log("ERROR AL QUERE LISTAR La Categorias HIJOS:"+error);
        }
    }
    
   
} 

export async function childbyid(req,res){
    const { id } = req.params;
   
    if (id != 0) {//no es categoria padre
        
        try {
       
            const child =await  Category.findOne({
               
                where:{
                    code:id
                }
            });
            res.json({
                child
            })
          
        } catch (error) {
            console.log("ERROR AL QUERE LISTAR La Categoria HIJA:"+error);
        }
    }
    
   
} 





class Developer 
{
    constructor(name)
    {
        this.name = name
    }

    commit(message)
    {
        console.log(`${this.name} commiting with message ${message}`)
    }
}

//object composition
function canBuildUI(developer)
{
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UIs`)
        }
    }
}

function canBuildAPI(developer) 
{
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API`)
        }
    }
}

function canDeployApp(developer)
{
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying App`)
        }
    }
}

//membuat object creator dengan mengomposisikan menggunakan method Object.assign()
function createFrontDev(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer))
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, buildAPI(developer))
}

function createDevOpsDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer))
}

function createFullStackDev(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer))
}


//membuat objek menggunakan function object creator
const ObjekFulstack = createFullStackDev("Prismana")
ObjekFulstack.buildAPI()
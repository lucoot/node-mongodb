const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},{
    _id: new ObjectID(),
    text: 'Second test todo'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});
//SET OF POST TESTS
describe('POST /todos', () => {
    //TEST
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((error, res) => {
                if (error) {
                    return done(error);                   
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text)
                    done();
                }).catch((err) => done(err));
            })
    });

    //TEST
    it('should not create todo if invalid data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((error, res) => {
            if (error) {
                return done(error);                   
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((err) => done(err));
        })
    });
});


//SET OF GET TESTS
describe('GET /todos', () => {
    //TEST
    it('should get all todos', (done) => {     
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
    
    //TEST   
    it('should get todo by id', (done) => {     
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });


//TEST
    it('should return 404 if ID not found', (done) => {     
        request(app)
        .get('/todos/5bd7ced356ae8321540c96dd')
        .expect(404)
        .end(done);
    });


//TEST
    it('should return 404 for invalid object ID', (done) => {     
        request(app)
        .get('/todos/1234')
        .expect(404)
        .end(done);
    });
});








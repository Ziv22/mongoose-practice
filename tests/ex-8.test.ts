import { Mongoose } from 'mongoose'
import MongoDbTester from '../utils/MongoDbTester'
import myConsole from '../utils/console'

const BookModel = require( './../models/BookModel' )
const mongooseClient = require( './../mongoose' )
const exFunction = require( '../solutions/ex-8.solution' )

describe( 'ex-8', () => {
	let mongoose: Mongoose = mongooseClient
	let tester: MongoDbTester

	const DATABASE_NAME = 'mongoose-practice'

	beforeEach( done => {
		tester = new MongoDbTester( mongoose, DATABASE_NAME )
		done()
	} )

	afterEach( done => {
		tester.close()
		done()
	} )

	it( `You should find books whose rating is less than 5, and sort by the author's name`, done => {
		// Populate

		exFunction( BookModel, myConsole( ( results: [] ) => {
			console.log( results )
			expect( results.length, '' ).toBe( 8 )
			done()
		} ) )
	} )
} )
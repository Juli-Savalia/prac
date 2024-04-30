import {todo,brands,card} from "./Record"
import React from "react";
function Filter({todo,brands,card}) {
  return (
    <div>
      {/* header */}
      <header className='bg-darkblue p-2'>
        <div class="container">
          <div className='logo'>
            <h1 className='text-white fs-4 fw-bold fst-italic m-0'>FlipKart</h1>
            <h5 class="fst-italic"><font color="white" size="2">Explore</font> <font color="yellow" size="2">Plus</font><img src="plus_aef861.png" alt="plus_img" class="ps-2" height="15"></img></h5>
          </div>
        </div>
      </header>
      {/* todo */}
      <div>
        <div class="bg-secondary col-12">
          <div class="justify-content-between d-flex flex-wrap">
            <div class="to_do col-3 bg-white border-grey">
              <ul>
                {
                  todo.map((todo, index) => {
                    return (
                      <ul key={todo.id}>
                        <li class="border-bottom border-2 pb-4">
                          <h3 class="py-4">{todo.heading}</h3>
                          
                          <p>
                            <img src={todo.sym} height="15" class="pe-3"></img>
                            <button class="text-dark text-decoration-none" key={todo.id} onClick={ () => card(todo.sym_topic1)}>{todo.sym_topic1}
                            </button>
                          </p>
                          <p>
                            <img src={todo.sym} height="15" class="pe-3"></img>
                            <button class="text-dark text-decoration-none" key={todo.id}>{todo.sym_topic2}
                            </button>
                          </p>

                        </li>
                        <li>
                          <ul class="ps-0 pe-5 py-3">
                            {
                              brands.map((b) => {
                                return (
                                  <li key={b.id} className='d-flex align-items-center justify-content-between py-3'>
                                    <a href='#' className='text-decoration-none text-secondary'>{b.heading}</a>
                                    <img src={b.img} height="15"></img>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </li>
                      </ul>
                    )
                  })
                }
              </ul>
            </div>
            {/* cards */}
            <div class="cards col-9 bg-white d-flex align-items-center flex-wrap">
              {
                card.map((c) => {
                  return (
                    <div class="col-3 py-3 pb-0" key={c.id}>
                      <div class="card p-2 border-0 pb-0 pt-0">
                        <img src={c.banner1} class="card-img-top" alt="..." height="230"></img>
                        <div class="card-body pt-2 h-220">
                          <p class="grey-400 m-0 fs-12 fw-bold">{c.spons}</p>
                          <h5 class="grey-600 fw-semibold m-0 pb-1">{c.head}</h5>
                          <p class="text-dark fst-italic m-0 pb-1">
                            {c.p}
                            <img src={c.assured} alt="assured" height="15"></img>
                          </p>
                          <h6 class="fs-5">{c.price}<del class="text-secondary ps-2">{c.cut_price}</del></h6>
                          <p class="grey-400 fst-italic fs-12 fw-bold">{c.p2}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter

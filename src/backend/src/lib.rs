use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{Cell, DefaultMemoryImpl};
use std::cell::RefCell;

type Memory = VirtualMemory<DefaultMemoryImpl>;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static GREETING: RefCell<Cell<String, Memory>> = RefCell::new(
        Cell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
            "Hello, ".to_string()
        ).unwrap()
    );
}

#[ic_cdk::update]
fn set_greeting(prefix: String) {
    GREETING.with_borrow_mut(|greeting| greeting.set(prefix).unwrap());
}

#[ic_cdk::query]
fn greet(name: String) -> String {
    GREETING.with_borrow(|greeting| format!("{} {name}!", greeting.get()))
}


ic_cdk::export_candid!();

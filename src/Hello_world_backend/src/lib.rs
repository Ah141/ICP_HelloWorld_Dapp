use candid::CandidType;
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{ Cell, DefaultMemoryImpl};
use std::{borrow::Cow};
use std::cell::RefCell;


type Memory = VirtualMemory<DefaultMemoryImpl>;

// To store global state in a Rust canister, we use the `thread_local!` macro.
thread_local! {

    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));


    static GREETING: RefCell<Cell<String, Memory>> = RefCell::new(
        Cell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), "Hello, ".to_string()
        ).unwrap()
    );
}


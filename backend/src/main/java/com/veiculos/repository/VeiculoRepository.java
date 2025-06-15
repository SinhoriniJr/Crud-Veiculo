package com.veiculos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veiculos.entity.Veiculo;



public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
    
    
}

package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cake_management")
public class Cake {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "cake_name")
	private String cake_name;

	@Column(name = "quantity")
	private String quantity;
	
	@Column(name = "weight")
	private String weight;	
	
	@Column(name = "price")
	private Long price;
	
	public Cake() {
		
	}
	
	public Cake(String cake_name, String quantity, String weight, Long price) {
		super();
		this.cake_name = cake_name;
		this.quantity = quantity;
		this.weight = weight;
		this.price = price;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCakeName() {
		return cake_name;
	}

	public void setCakeName(String cakeName) {
		this.cake_name = cakeName;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}
	
}
